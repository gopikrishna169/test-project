function New() {

    const element = <div> Class in progress !!!</div>

    const shouldDisplay = true;
    
    return (
        <div>
            Hey Everyone !!!!
            { shouldDisplay ? element : <div></div>}
        </div>
    )
}

export default New;