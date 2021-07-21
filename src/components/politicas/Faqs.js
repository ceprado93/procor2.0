import { useState, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import "./Politicas.css";

const Faqs = () => {
  const [size, setSize] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.innerWidth < 550 ? setSize(true) : setSize(false);
  }, []);

  return (
    <section style={{ textAlign: "justify" }}>
      {size ? (
        <p id="SemiBold" className="titulo">
          PREGUNTAS FRECUENTES
        </p>
      ) : (
        <p id="SemiBold" className="titulo" style={{ margin: "6rem" }}>
          PREGUNTAS FRECUENTES
        </p>
      )}
      <Container>
        <p id="SemiBold">¿Qué es el Covid-19?</p>
        <p>
          El Covid-19 es una enfermedad infecciosa causada por el virus del coronavirus SARS-CoV-2. El brote se originó
          en Wuhan (China) en diciembre de 2019 y se ha convertido en una pandemia mundial.
        </p>
        <p id="SemiBold">¿Cómo se contagia?</p>
        <p>
          El Covid-19 se contrae cuando una persona entra en contacto con otra infectada por el virus. Se propaga sobre
          todo por las gotículas que salen de la boca o de la nariz al hablar, toser o estornudar. Por ello, es
          importante que te mantengas al menos a un metro de otras personas para evitar inhalar estas gotículas, que
          uses mascarilla y que te laves las manos.
        </p>
        <p id="SemiBold">¿En qué fases se puede diagnosticar?</p>
        <p>
          Es importante saber en qué fase de la enfermedad te encuentras para determinar qué prueba o tratamientos
          necesitas. Las tres fases que existen son: infección temprana, fase pulmonar e hiperinflamación.
        </p>
        <p id="SemiBold">¿Cuáles son sus síntomas?</p>
        <p>
          Los síntomas más comunes del coronavirus son: fiebre, tos y cansancio. También se han asociado a la enfermedad
          otros como la pérdida de gusto y olfato, dolores y molestias, congestión nasal, dolor de cabeza y de garganta
          o erupciones cutáneas. A pesar de esto, existe la posibilidad de ser asintomático.
        </p>
        <p id="SemiBold">¿Qué significa contacto estrecho?</p>
        <p>
          Cualquier persona que haya permanecido sin protección a una distancia menor a 2 metros durante al menos 15
          minutos con un caso confirmado. También, desde 48 horas antes de que inicie síntomas o desde 48 horas antes de
          la realización de la prueba diagnóstica.
        </p>
        <p id="SemiBold">¿Se puede prevenir el contagio del Covid-19?</p>
        <p>
          Sí se puede prevenir. Debes usar la mascarilla para protegerte a ti mismo y a los demás, mantener distancia de
          más de un metro entre personas, ventilar los espacios cerrados, lavarte las manos frecuentemente, con la
          realización de test a menudo.
        </p>
        <p id="SemiBold">¿Qué hacer si has estado en contacto con una persona infectada?</p>
        <p>
          Si has estado en contacto con una persona infectada debes permanecer en casa al menos 10 días desde el último
          contacto y observar durante este periodo la aparición de algún síntoma. Además, puedes realizarte una prueba
          para descartar un posible contagio.
        </p>
        <p id="SemiBold" className="titulin">
          PRUEBAS
        </p>
        <p id="SemiBold">¿Qué es una PCR en saliva?</p>
        <p>
          Esta prueba detecta el SARS-CoV-2 a través de una muestra de saliva permitiendo saber si la persona está
          infectada con la misma fiabilidad que la PCR nasofaríngea. Su realización no requiere de personal sanitario.
          La persona que se hace el test recibe un recipiente donde tendrá que depositar la saliva para su posterior
          análisis en el laboratorio.
        </p>
        <p id="SemiBold">¿Qué es una PCR nasofaríngea?</p>
        <p>
          Esta prueba permite localizar un fragmento de material genético para ver si este contiene ARN del SARS-CoV-2.
          Si tras el análisis de la prueba en el laboratorio se detecta ARN del virus, el resultado será positivo. Por
          el contrario, si no se detecta material genético del virus, el resultado será negativo.
        </p>
        <p id="SemiBold">¿Qué es un test de antígenos?</p>
        <p>
          Este test rápido se realiza para la detección de antígenos del SARS-CoV-2 a través de una muestra nasofaríngea
          o bucofaríngea extraída con un hisopo. Esta prueba permite un diagnóstico rápido para que puedas tomar las
          medidas necesarias. Suele ser muy efectivo en la primera fase de la infección.
        </p>
        <p id="SemiBold">¿Cómo interpretar el resultado del test de antígenos?</p>
        <p>
          Resultado positivo. Las bandas de colores aparecen tanto en la línea de prueba (T) como en la línea de control
          (C).
        </p>
        <p>Resultado negativo. La banda de color aparece solo en la línea de control (C).</p>
        <p>
          Resultado invalidado. Si la banda de control (C) no aparece coloreada, el resultado del test no es válido y
          hay que repetirlo. O cuando no aparece la banda de color en ninguna de las dos.
        </p>
        <p id="SemiBold">
          ¿Qué es un test <strong>serológico</strong> o de
          <strong>anticuerpos</strong>?
        </p>
        <p>
          Esta prueba detecta la presencia de <strong>anticuerpos</strong> que ha generado el organismo tras la
          aparición de la enfermedad. A través de una muestra de sangre extraída con la ayuda de una lanceta, se
          encuentran las inmunoglobulinas IgM y IgG para comprobar si una persona ha estado expuesta al virus o si se ha
          recuperado del mismo. La detección de los <strong>anticuerpos</strong> se sabrá pasados 15 minutos de la
          realización de la prueba.
        </p>
        <p id="SemiBold">¿Qué es IgM e IgG?</p>
        <p>
          IgM e IgG son inmunoglobulinas que se unen al virus y activan el sistema inmunitario para conseguir la
          eliminación del virus. En concreto, IgM es el anticuerpo que el organismo genera cuando cualquier virus entra
          en el cuerpo. Por otro lado, IgG se une específicamente al virus del SARS-CoV-2.
        </p>
        <p id="SemiBold">
          ¿Cómo interpretar el resultado del <strong>serológico</strong>/<strong>anticuerpos</strong>?
        </p>
        <p>
          Resultado negativo. La ausencia de bandas de detección junto a las “T” quiere decir que el sistema
          inmunológico del paciente no ha desarrollado <strong>anticuerpos</strong> IgM ni IgG, por lo que, se puede
          decir, que el virus no está ni ha estado presente en su organismo, o que ha pasado el tiempo suficiente para
          haber dejado de tener <strong>anticuerpos</strong>.
        </p>
        <p>
          Resultado negativo. La aparición de la banda de detección junto a la segunda “T” (IgG), quiere decir que el
          sistema inmunológico del paciente ha desarrollado <strong>anticuerpos</strong> IgG, por lo que ya ha pasado la
          fase de infección y el virus no se encuentra presente en su organismo.
        </p>
        <p>
          Resultado positivo. La aparición de las bandas de detección junto a ambas “T” quiere decir que el sistema
          inmunológico del paciente ha desarrollado tanto <strong>anticuerpos</strong> IgM como IgG, por lo que está en
          la segunda fase de infección, en la que generan
          <strong>anticuerpos</strong> IgG para proteger al organismo frente a un futuro contagio.
        </p>
        <p>
          Resultado positivo. La aparición de la banda de detección junto a la primera “T” (IgM), quiere decir que el
          sistema inmunológico del paciente ha desarrollado <strong>anticuerpos</strong> IgM, por lo que está en la
          primera fase de infección y no ha desarrollado los
          <strong>anticuerpos</strong> IgG para proteger al organismo frente a un futuro contagio. Estos
          <strong> anticuerpos</strong> duran una media de 6 meses en el organismo. Puede infectar a otros.
        </p>
        <p id="SemiBold">
          ¿Por qué me ha salido un resultado no válido en el test
          <strong>serológico</strong>?
        </p>
        <p>
          A veces sale un resultado no válido por varias razones: que la gota de sangre utilizada sea pequeña, que hayas
          echado la cantidad adecuada de reactivo o que se hayan formado burbujas al echarlo.
        </p>
        <p id="SemiBold" className="titulin">
          EMPRESAS
        </p>
        <p id="SemiBold">¿Qué medidas seguir para la organización de un evento?</p>
        <p>
          Cada evento es diferente, por ello conviene que hagas una valoración del tipo de evento teniendo en cuenta
          diferentes características: el número de asistentes, el lugar donde se va a desarrollar y la duración del
          evento.
        </p>
        <p>Tras este análisis, habría que prevenir el riesgo de contagio:</p>
        <p>Comprobando que los asistentes no estén contagiados de Covid-19 mediante la realización de pruebas.</p>
        <p>Teniendo un plan de actuación ante casos sospechosos.</p>
        <p>Ofreciendo la asistencia virtual. </p>
        <p>
          Siguiendo las medidas de seguridad usando mascarilla, manteniendo la distancia necesaria y lavándose las manos
          con frecuencia.
        </p>
        <p id="SemiBold">
          Si un participante de un evento organizado por mi empresa da positivo, ¿cuál sería el siguiente paso?
        </p>
        <p>
          El equipo de ProcorLab, además del test de antígenos, lleva siempre un kit de prueba de saliva. Se le recogerá
          una muestra de saliva a la persona contagiada y en 6 horas le confirmaremos el resultado.
        </p>
        <p id="SemiBold">¿Cómo puedes proteger a tus empleados?</p>
        <p>Realizar pruebas regularmente para evitar el contagio en el lugar de trabajo.</p>
        <p>Limpiar y desinfectar los puestos de trabajo a diario.</p>
        <p>Tener un sistema de ventilación efectivo.</p>
        <p>Medir la temperatura a los empleados antes de acceder a la empresa.</p>
        <p>Distribuir desinfectantes de manos.</p>
        <p id="SemiBold" className="titulin">
          VACUNAS
        </p>
        <p id="SemiBold">¿Es posible contraer el Covid-19 a través de la vacunación?</p>
        <p>
          Según el Ministerio de Sanidad, no es posible contraer el Covid-19 después de la vacunación, ya que estas
          vacunas no contienen el virus vivo. Aunque no hay que olvidar que ninguna vacuna es 100% eficaz, por lo que
          algunas personas podrían no generar protección al virus.
        </p>
        <p id="SemiBold">¿Es efectiva la vacuna de Pfizer/BioNTech ante las variantes?</p>
        <p>
          Según los datos facilitados por las empresas farmacéuticas, esta vacuna es eficaz contra las tres variantes.
          Aunque un reciente estudio indica que la variante sudafricana reduce dos tercios la protección de los{" "}
          <strong>anticuerpos</strong>.
        </p>
        <p id="SemiBold">¿Es efectiva la vacuna de Moderna ante las variantes?</p>
        <p>
          La farmacéutica Moderna ha asegurado que su vacuna es efectiva contra las variantes británica y sudafricana.
          Por el momento no tienen datos de la efectividad en la variante brasileña. Además, está desarrollando una
          vacuna específica para la variante sudafricana.
        </p>
        <p id="SemiBold">¿Es efectiva la vacuna de Oxford/AstraZeneca ante las variantes?</p>
        <p>
          Esta vacuna no protege a ciertos casos de la variante sudafricana, lo que ha hecho que Sudáfrica suspenda
          temporalmente su administración en el país. Un estudio realizado en el país africano ha determinado que la
          vacuna de Oxford es más efectiva en los casos más graves frente a los casos más leves, donde ofrece una
          protección mínima.
        </p>
      </Container>
    </section>
  );
};

export default Faqs;
