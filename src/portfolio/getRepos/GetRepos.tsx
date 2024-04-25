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

interface Props {
    repos: Repo[];
}

function GetRepos({ repos }: Props) {
    const [repoLanguages, setRepoLanguages] = useState<{ [key: string]: { [key: string]: string | null } }>({});

    useEffect(() => {
        const fetchLanguages = async () => {
            const languagesData: { [key: string]: { [key: string]: string | null } } = {};

            for (const repo of repos) {
                try {
                    const response = await fetch(repo.languages_url, {
                        method: "GET",
                        headers: {
                            "Authorization": "Bearer ${{ secrets.APITOKEN }}",
                            "User-Agent": "D-Hankin",
                            "Accept": "application/vnd.github+json"
                        }
                    });
                    if (!response.ok) {
                        throw new Error("Bad network response.");
                    }
                    const data = await response.json();
                    const percentages = parseLanguages(data);
                    languagesData[repo.id.toString()] = percentages;
                } catch (error) {
                    console.error(`Error fetching languages for ${repo.name}:`, error);
                    languagesData[repo.id.toString()] = { error: 'Error fetching languages' };
                }
            }

            setRepoLanguages(languagesData);
        };

        if (repos.length > 0) {
            fetchLanguages();
        }
    }, [repos]);

    const parseLanguages = (languages: { [key: string]: number }): { [key: string]: string | null } => {
        const totalLines: number = Object.values(languages).reduce((sum, value) => sum + value, 0);
        const percentages: { [key: string]: string | null } = {};

        for (const [language, lines] of Object.entries(languages)) {
            percentages[language] = ((lines / totalLines) * 100).toFixed(2) + '%';
        }

        return percentages;
    };

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
                    {Object.values(repos).map((repo: Repo) => (
                        <tr className='getReposTr' key={repo.id}>
                            <td><a className='repoName' href={repo.html_url} target='_blank'>{repo.name}</a></td>
                            <td>
                                {repoLanguages[repo.id.toString()] &&
                                    (repoLanguages[repo.id.toString()].error ? (
                                        <div className='languageDiv'>{repoLanguages[repo.id.toString()].error}</div>
                                    ) : (
                                        Object.entries(repoLanguages[repo.id.toString()]).map(([language, percentage]) => (
                                            <div className='languageDiv' key={language}>{language}: {percentage}</div>
                                        ))
                                    ))
                                }
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
