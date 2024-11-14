const Docs = ({
    params
} : {
    params:{
        slug: String[]
    }
}) => {
    if (params.slug?.length === 2){
        return <h1>This is first segment named: "{params.slug[0]}", <br></br>This is second segment names: "{params.slug[1]}"</h1>
    } else if (params.slug?.length === 1){
        return <h1>This is first segment named: "{params.slug[0]}"</h1>
    }
    return <h1>This is Docs page</h1>
}

export default Docs