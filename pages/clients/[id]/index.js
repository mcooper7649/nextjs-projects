import {useRouter} from 'next/router'

function ClientsProjectsPage(){
const router = useRouter()

console.log(router.query)

function loadProjectHandler(){
    router.push({
        pathname: '/clients/[id]/[clientprojectid]',
        query: {    id: 'max', clientprojectid: 'projecta'}
    })
}

    return (
        <div>
            <h1>The ClientsProjects Page</h1>
            <button onClick={loadProjectHandler}>Click Here</button>
        </div>
    )
}

export default ClientsProjectsPage;