import React, { Component } from "react";

class Envios extends Component {
  constructor(props) {
    super();
    this.state = {
      data: "",
    };
  }

  render() {
    return (
      <div id="politicas">
        <section>
          <p id="SemiBold">Envío Express</p>
          <p>
            Gracias a una gran compañía como Correos Express, se garantiza la entrega en un plazo máximo de 48h, siempre
            que las circunstancias lo permitan.
          </p>
          <p>Llámanos para más información al (+34) 917 36 42 41</p>
          <p id="SemiBold">Gastos de Envío a PENÍNSULA</p>
          <p>
            Los gasto de envío variarán dependiendo del volumen de cada producto. Al final de la compra podrá comprobar
            los gastos que conlleva cada envío, variando desde los 2,95 para un sobre, 4,95€ para un paquete de hasta
            5kg y hasta un máximo de 10,00€ por pesos superiores. Impuestos no incluidos.
          </p>
          <p>Sobre 2,95€ + iva</p>
          <p>Bulto hasta 5kg 4,95€ + iva</p>
          <p>Bulto desde 5kg 10,00€ + iva</p>
          <p id="SemiBold">Otros envíos a NO PENÍNSULA</p>
          <p>Los gastos de envío a Islas Canarias, Baleares, Ceuta y Melilla son de 10€.</p>
          <p>
            Para cualquier consulta relacionaza para envíos a otras comunidades o provincias fuera de la península u
            otros países, rogamos se ponga en contacto en el télefono (+34) 917 36 42 41 o en el correo
            pedidos@procorlab.es
          </p>
          <p id="SemiBold">CANCELACIÓN DE PEDIDOS</p>
          <p>
            Procor, (de aquí en adelante, LA EMPRESA) aceptará cancelaciones de pedidos cuando se soliciten antes del
            envío del mismo.
          </p>
          <p>Para realizar la cancelación debes solicitarlo mediante el envío de un e-mail a pedidos@procorlab.es</p>
          <p id="SemiBold">DEVOLUCIÓN</p>
          <p>I.- Procedimiento de devolución</p>
          <p>
            Todos los productos comprados a LA EMPRESA, podrán ser devueltos y reembolsados, siempre que el Cliente
            comunique a LA EMPRESA que el producto esta defectuoso dentro de un plazo máximo de hasta 14 días laborables
            contados desde la fecha de entrega y que se cumplan el resto de las condiciones establecidas en este
            apartado.
          </p>
          <p>LA EMPRESA, sólo aceptará devoluciones que cumplan los siguientes requisitos:</p>
          <p>
            1.- El producto debe de estar en el mismo estado en que se entregó y deberá de conservar su embalaje y
            etiquetado original.
          </p>
          <p>
            2.- El envío debe de hacerse usando la misma caja en que ha sido recibido para proteger el producto. Para el
            supuesto de que no pueda hacerse con la caja con la que se entregó, el Cliente deberá de devolverlo en una
            caja protectora con el fin de que el producto llegue al almacén de LA EMPRESA con las máximas garantías
            posibles.
          </p>
          <p>
            3.- Debe de incluirse una copia del albarán de entrega dentro del paquete, donde además se marquen los
            productos devueltos y el motivo de la devolución.
          </p>
          <p>
            Con el objetivo de facilitar a los Clientes el proceso de devolución y poder hacer un correcto seguimiento
            de la misma, LA EMPRESA, establece como único procedimiento de devolución el establecido por LA EMPRESA. Si
            el motivo de la devolución es imputable a LA EMPRESA (el producto es defectuoso, ha llegado roto, no es el
            que el Cliente había pedido, etc…), el importe de la devolución será reembolsado.
          </p>
          <p>Para proceder con una devolución, se deben de seguir los siguientes pasos:</p>
          <p>
            1.- Informar antes de 7 días naturales desde su recepción que el producto quiere ser devuelto. La
            información podrá realizarse vía correo a pedidos@procorlab.es
          </p>
          <p>2.- LA EMPRESA informará al cliente de la dirección a la que debe de enviar el producto.</p>
          <p>
            3.- El Cliente debe de enviarlo mediante una empresa de mensajería de su elección. La devolución debe de
            pagarla el Cliente.
          </p>
          <p>4.- Informar de la empresa de mensajería que será utilizada, fecha y hora de la devolución.</p>
          <p>EDAD MÍNIMA DE COMPRA</p>
          <p>REQUISITOS PARA UTILIZAR EL SERVICIO:</p>
          <p>
            Sólo las personas de 18 o más años de edad pueden crear cuentas. Las cuentas para personas de menos de 18
            años pueden ser creadas por el padre, madre o tutor legal. Los menores de 18 años deberán leer el presente
            Contrato con su padre, madre o tutor legal para garantizar que tanto el menor como su representante legal,
            han comprendido su contenido.
          </p>
          <p>
            Amplíe más información sobre nuestras política de devolución llamando al teléfono (+34) 917 36 42 41 o
            escribiéndonos al correo electrónico pedidos@procorlab.es
          </p>
        </section>
      </div>
    );
  }
}
export default Envios;
