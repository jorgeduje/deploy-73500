const obtenerProductos = async () => {
  const response = await fetch("./db.json");
  const res = await response.json();
  console.log(res.productos);
};

obtenerProductos();
