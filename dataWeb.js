module.exports = function () {
  var data = {
    Empresa: [
      {
        id:1,
        nombre_Empresa: "Interbank",
        descripcion_Empresa: "Banco importante del Perú",
        correo_Empresa:"interbank@gmail.com",
      },
      {
        id:2,
        nombre_Empresa: "BBVA",
        descripcion_Empresa: "Banco importante del Perú",
        correo_Empresa:"bbva@gmail.com",
      },
      {
        id:3,
        nombre_Empresa: "BCP",
        descripcion_Empresa: "Banco importante del Perú",
        correo_Empresa:"bcp@gmail.com",
      },
      {
        id:4,
        nombre_Empresa: "UPC",
        descripcion_Empresa: "Institución educativa de estudios superiores",
        correo_Empresa:"upc@gmail.com",
      }
    ],
    Requisitos: [
        {
          id:1,
          Requisito: "Autodidacta, Ingeniero de Software, Ingeniero de Sistemas",
        },
        {
          id:2,
          Requisito: "Autodidacta, Comunicaciones, Lider",
        },
        {
          id:3,
          Requisito: "Autodidacta, Lider, Ingeniero de Software, Ingeniero de Sistemas",
        },
        {
          id:4,
          Requisito: "Autodidacta, Ingeniero de Software, Ingeniero de Sistemas",
        }
      ],
    Usuario: [
        {
          id:1,
          DNI_Usuario: 72400476,
          Usuario_Usuario:"PedroFin",
          Nombre_Usuario:"José Portocarrero",
          Correo_Usuario:"pedrofin@gmail.com",
          Contrasena_Usuario:"pedrofin123",
          Tipo_Usuario:"admin",
          key:"gd56hhi1q853mavgf245",
        },
        {
            id:2,
            DNI_Usuario: 72740496,
            Usuario_Usuario:"MariaFer",
            Nombre_Usuario:"Maria Fernadez",
            Correo_Usuario:"mariaFer@gmail.com",
            Contrasena_Usuario:"MariaFer3155",
            Tipo_Usuario:"estudiante",
            key:"", //null
        },
        {
            id:3,
            DNI_Usuario: 72400270,
            Usuario_Usuario:"AdolfoMur",
            Nombre_Usuario:"Adolfo Muros",
            Correo_Usuario:"adolfoMur@gmail.com",
            Contrasena_Usuario:"AdolfoMur_741",
            Tipo_Usuario:"estudiante",
            key:"", //null
        },
        {
            id:4,
            DNI_Usuario: 72405976,
            Usuario_Usuario:"AnaCon",
            Nombre_Usuario:"Ana Contreras",
            Correo_Usuario:"anaCon@gmail.com",
            Contrasena_Usuario:"AnaCon864",
            Tipo_Usuario:"reclutador",
            key:"", //null
        }
      ],
    Institucion_Educativa: [
        {
          id:1,
          nombre_Institucion: "Universidad Peruana de Ciencias Aplicadas",
        },
        {
          id:2,
          nombre_Institucion: "Universidad Nacional de Ingeniería",
        },
        {
          id:3,
          nombre_Institucion: "Universidad Nacional Mayor de San Marcos",
        },
        {
          id:4,
          nombre_Institucion: "Universidad de Ingeniería y Tecnología",
        }
      ],
    Carreras: [
        {
          id:1,
          nombre_Carrera: "Ingeniería de Sistemas de Información",
        },
        {
          id:2,
          nombre_Carrera: "Ingeniería de Software",
        },
        {
          id:3,
          nombre_Carrera: "Ciencias de la Computación",
        },
        {
          id:4,
          nombre_Carrera: "Ingeniería Mecatrónica",
        }
      ],
    Calificacion: [
        {
          id:1,
          id_Estudiante: 3,
          Calificacion: 4, //de 1-5
        },
        {
          id:2,
          id_Estudiante: 3,
          Calificacion: 5, //de 1-5
        },
        {
          id:3,
          id_Estudiante: 2,
          Calificacion: 2, //de 1-5
        },
        {
          id:4,
          id_Estudiante: 2,
          Calificacion: 3, //de 1-5
        }
      ],
  }
  return data
}
