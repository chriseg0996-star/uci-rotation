// Tabla de figura data-driven y responsiva (scroll horizontal en pantallas estrechas).
// table = { columnas: [str], filas: [[celdas]], tonos?: [rowTono] }  tono: steel|pearl|terra|mint
const ROW_TONE = {
  steel: 'text-steel-300',
  pearl: 'text-pearl-300',
  terra: 'text-terra-300',
  mint: 'text-mint-300',
}

export default function FigureTable({ table }) {
  if (!table?.columnas) return null
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-[13px]">
        <thead>
          <tr className="border-b border-slate-700">
            {table.columnas.map((c, i) => (
              <th
                key={i}
                className="px-3 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-400"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.filas.map((fila, r) => (
            <tr key={r} className="border-b border-slate-700/40 last:border-0">
              {fila.map((celda, c) => (
                <td
                  key={c}
                  className={[
                    'px-3 py-2.5 align-top leading-snug',
                    c === 0 ? 'font-medium text-ink-100' : 'text-ink-200',
                    c === 0 && table.tonos?.[r] ? ROW_TONE[table.tonos[r]] : '',
                  ].join(' ')}
                >
                  {celda}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
