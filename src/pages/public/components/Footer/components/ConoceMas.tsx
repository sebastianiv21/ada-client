import { type FC } from "react"
import { Stack } from "react-bootstrap"

interface Link {
  href: string
  text: string
}

const links: Link[] = [
  {
    href: "https://www.huila.gov.co/salud/publicaciones/5284/secretario-de-salud/",
    text: "Secretaria de Salud del Huila",
  },
  {
    href: "https://www.minsalud.gov.co/Portada2021/index.html",
    text: "Ministerio de Salud",
  },
  {
    href: "https://www.huila.gov.co/",
    text: "Gobernación del Huila",
  },
]

const ConoceMas: FC = () => {
  return (
    <Stack direction="vertical" gap={2}>
      <strong>Conoce más</strong>
      <ul className="list-unstyled">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </Stack>
  )
}

export default ConoceMas
