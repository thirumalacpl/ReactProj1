export default function Todo(){
    return <>
        <div className="row p-3 bg-success text-light">
            <h1>todo project</h1>
        </div>

        <div className="row">
            <h3> Add Item</h3>
            <p className="text-success"> Item added successfully</p>
            <div className="form">
                <input className="form-control" type="text"></input>
                <button className="btn"></button>
            </div>
        </div>
    </>
}