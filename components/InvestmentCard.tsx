type Props = {
  precio: number;
};

export default function InvestmentCard({
  precio,
}: Props) {

  const tasa = 0.10;

  const calcular = (años: number) => {
    return precio * Math.pow(1 + tasa, años);
  };

  return (
    <div className="mt-8 bg-gradient-to-r from-emerald-50 to-green-100 border border-green-200 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-green-700">

        💰 ¿Y si mejor lo inviertes?

      </h2>

      <p className="text-gray-600 mt-2">

        Simulación al 10% anual.

      </p>

      <div className="grid md:grid-cols-4 gap-5 mt-8">

        {[1,3,5,10].map((años)=>(

          <div
            key={años}
            className="bg-white rounded-2xl shadow-lg p-5 text-center"
          >

            <p className="text-gray-500">

              {años} {años===1?"año":"años"}

            </p>

            <h3 className="text-2xl font-bold text-green-700 mt-3">

              ${calcular(años).toLocaleString(undefined,{
                maximumFractionDigits:0
              })}

            </h3>

          </div>

        ))}

      </div>

      <div className="mt-8 bg-white rounded-2xl p-6">

        <h3 className="text-xl font-bold">

          Ganancia potencial

        </h3>

        <p className="text-4xl font-extrabold text-green-700 mt-3">

          +$
          {(calcular(10)-precio).toLocaleString(undefined,{
            maximumFractionDigits:0
          })}

        </p>

      </div>

    </div>
  );
}