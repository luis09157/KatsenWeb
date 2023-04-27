export const getEmployees = (req,res) => res.send("Obteniendo Empleados")


export const createEmployee = async (req, res) => {
    console.log(req.body);
    res.send("post success");
};