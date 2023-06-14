import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Main.css";
import User from "../../Images/User.png";
import Card from "../Card/Card";

export default function Main() {
    return (<>
        <Header />
        {/* Titulo del cuerpo del Main */}
        <p className="Header">
            <h1 className="Title"> ¿Quieres aprender <br /> la lengua kankuama?</h1>
            <h2 className="Subtitle"> Explora nuestro diccionario kankuamo en línea</h2>
        </p>

        {/* Cartas de Información del cuerpo del Main */}
        <div className="card-info row row-cols-1 row-cols-md-2 g-2">
            <div className="col">
                <div className="card-img">
                    <img src={User} className="card-img-top" alt="Imagen ...." />
                </div>
            </div>
            <div className="col">
                <div className="card-text">
                    <h2 className="card-title"> Tenemos todas las palabras que deseas aprender </h2>
                    <h4 className="card-text-info"> Desde nivel principiante hasta avanzado, ofrecemos una amplia variedad de Palabras de la lengua kankuama.</h4>
                </div>
            </div>
        </div>

        {/* Cartas de Categoría cuerpo del Main */}
        <h1 className="categories"> Categorías</h1>
        <div className="row row-cols-2 row-cols-md-4 g-0">
            <Card
                spanish={"Animales"}
                data={User}
            />
            <Card
                spanish={"Colores"}
                data={User}
            />
            <Card
                spanish={"Números"}
                data={User}
            />
            <Card
                spanish={"Partes del cuerpo"}
                data={User}
            />

        </div>


        <Footer />
    </>);
}