import { useEffect, useState } from 'react';
import "./getRepos.css";

interface Repo {
    id: number,
    name: string,
    html_url: string,
    description: string,
    created_at: string,
    languages_url: string
}

function GetRepos() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [trimmedAndSortedRepos, setTrimmedAndSortedRepos] = useState<Repo[]>([]);
    const [repoLanguages, setRepoLanguages] = useState<{ [key: string]: { [key: string]: string } }>({});

    const fetchAddress: string = "https://api.github.com/users/D-Hankin/repos";    
    
    const updateRepos = async () => {
        try {
            const response = await fetch(fetchAddress, {
                headers: {
                    // "Authorization": "Bearer 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",
                    "User-Agent": "D-Hankin",
                    "Accept": "application/vnd.github+json"
                }
            });
            if (!response.ok) {
                throw new Error("Bad network response.");
            }
            const data : Repo[] = await response.json();
            setRepos(data);
        } catch (error) {
            console.error('There was a problem fetching the repos:', error);
        }
    };

    const getLanguages = async (languagesUrl: string) => {
        try {
            const response = await fetch(languagesUrl, {
                method: "GET",
                headers: {
                    // "Authorization": "Bearer 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",
                    "User-Agent": "D-Hankin",
                    "Accept": "application/vnd.github+json"
                }
            });
            if (!response.ok) {
                throw new Error("Bad network response.");
            }
            const data = await response.json();
            return JSON.stringify(data);
        } catch (error) {
            console.error('There was a problem fetching the languages:', error);
            return ''; 
        }
    };

    const parseLanguages = (languages: string): { [key: string]: string } => {
        const parsedLanguages: { [ key: string ]: number} = JSON.parse(languages);
        const totalLines: number = Object.values(parsedLanguages).reduce((sum, value) => sum + value, 0);
        const percentages: { [key: string]: string } = {};
    
        for (const [language, lines] of Object.entries(parsedLanguages)) {
            percentages[language] = ((lines / totalLines) * 100).toFixed(2) + '%';
        }
    
        return percentages;
    };
    

    useEffect(() => {
        updateRepos();
    }, []); 

    useEffect(() => {
        setTrimmedAndSortedRepos([...repos].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
    }, [repos]);
    
    useEffect(() => {
        trimmedAndSortedRepos.forEach(async (repo) => {
            const languages = await getLanguages(repo.languages_url);
            const percentages = parseLanguages(languages);
            setRepoLanguages(prevState => ({
                ...prevState,
                [repo.id.toString()]: percentages 
            }));
        });
    }, [trimmedAndSortedRepos]);
    

    return (
        <div id='getReposTableDiv'>
            <table id='getReposTable'>
                <thead id="getReposTableHead">
                    <tr>
                        <td>Name</td>
                        <td>Langauges</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(trimmedAndSortedRepos).map((repo: Repo) => ( 
                        <tr className='getReposTr' key={repo.id}>
                            <td><a className='repoName' href={repo.html_url} target='_blank'>{repo.name}</a></td>
                            <td>
                                {repoLanguages[repo.id.toString()] && Object.entries(repoLanguages[repo.id.toString()]).map(([language, percentage]) => (
                                    <div className='languageDiv' key={language}>{language}: {percentage}</div>
                                ))}
                            </td>
                            <td className='description'>{repo.description}</td>  
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetRepos;
