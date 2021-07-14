import './category.css';

function Category(){
    return (
      <div className="category">

        <form className="categoryForm">
            <h1>Crear nueva categoría</h1>
          <div className="question">
            <input name="name" type="text" required />
            <label>Nombre de la categoría</label>
          </div>
          <div>
            <button>Crear</button>
          </div>
        </form>
      </div>
    );
}

export default Category;