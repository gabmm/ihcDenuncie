export default function Form({ onSubmit }){

    function handleSubmit(e){
        e.preventDefault();
        onSubmit();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"/><br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}