import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import TypingAnimation from "@/components/ui/typing-animation";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center gap-14 md:py-16">
        <div className="inline-block max-w-[40rem] text-center justify-center pt-[10rem]">
          <span className={title({ size: "sm" })}>Olá, seja&nbsp;</span>
          <span className={title({ color: "violet", size: "sm" })}>Bem-vindo&nbsp;</span>
          <br />
          <TypingAnimation
            className={title({ size: "lg" })}
            text="Eu sou Breno Santiago"
            duration={100}
          />
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Contate-me
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
        <div className="py-[10rem] max-w-[40rem] flex flex-col gap-6">
          <span className={`${title()} text-center`}>Sobre mim</span>
          <div className="text-justify">
            <p className={subtitle()}>
              Olá! Sou um entusiasta apaixonado por tecnologia.
            </p>
            <p className={subtitle()}>
              Estou cursando Análise e Desenvolvimento de Sistemas na FIAP, com conclusão prevista para 2024, iniciei formação em Ciências e Tecnologias pela UFABC e me formei técnico de Informática para a Internet pela ETEC de Poá.
            </p>
            <p className={subtitle()}>
              Minhas competências vão desde desenvolvimento web com React/Next.js até programação orientada a objetos em Java SpringBoot, habilidades comprovadas por certificações da Alura.
            </p>
            <p className={subtitle()}>
              Motivado pela inovação e pelo desejo de contribuir para projetos significativos, busco oportunidades que alinhem minha paixão por tecnologia com o desenvolvimento de soluções criativas e eficazes.
            </p>
          </div>
        </div>
      </section>
    </main>

  );
}
