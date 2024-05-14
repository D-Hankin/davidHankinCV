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
    repos: Repo[],
    repoLanguages: { [key: string]: { [key: string]: string | null } }
}

function GetRepos(props : Props) {
    
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
                    {Object.values(props.repos).map((repo: Repo) => (
                        <tr className='getReposTr' key={repo.id}>
                            <td><a className='repoName' href={repo.html_url} target='_blank'>{repo.name}</a></td>
                            <td>
                                {props.repoLanguages[repo.id.toString()] &&
                                    (props.repoLanguages[repo.id.toString()].error ? (
                                        <div className='languageDiv'>{props.repoLanguages[repo.id.toString()].error}</div>
                                    ) : (
                                        Object.entries(props.repoLanguages[repo.id.toString()]).map(([language, percentage]) => (
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
