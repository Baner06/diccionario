import Card from "../Card/Card";
import "./View.css";
import color from "../../Images/User.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Color() {
  let cards = [];
  const spanishInfo = [
    "Blanco", "Amarillo",
    "Azul", "Rojo",
    "Anaranjado", "Morado",
    "Verde", "Negro"
  ];
  const kankuamoInfo = [
    "Bunchikönke", "Akänl",
    "Chusuasi", "Amakua",
    "Yikanka", "Uözi",
    "Atahkáye", "Niakönke"
  ];
  const englishInfo = [
    "White", "Yellow",
    "Blue", "Red",
    "Orange", "Purple",
    "Green", "Black"
  ];

  for (let i = 0; i < 8; i++) {
    cards.push(
      <Card
        data={color}
        spanish={spanishInfo[i]}
        kankuamo={kankuamoInfo[i]}
        english={englishInfo[i]}
      />
    );
  }
  return (
    <>
      <Header />
      {/* Titulo de la vista  */}
      <h1 className="mt-auto Categoria">COLORES</h1>

      {/*Cartas de colores*/}
      <div className="row row-cols-2 row-cols-md-4 g-0">{cards}</div>
      <Footer />
    </>
  );
}
