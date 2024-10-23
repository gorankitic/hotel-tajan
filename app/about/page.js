// components
import Image from "next/image";
import Link from "next/link";
// prisma/db
import prisma from "@/app/_lib/database";
// assets
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";

export const metadata = {
    title: "О нама"
}

const About = async () => {
    const cabins = await prisma.cabins.findMany();

    return (
        <div className="grid grid-cols-5 gap-x-24 gap-y-24 text-xl items-center">
            <div className="col-span-3">
                <h1 className="text-4xl mb-8 text-accent-400 font-medium">
                    Добро дошли у хотел Тајан
                </h1>
                <div className="space-y-8">
                    <p>
                        Где се спајају лепота природе и сопствени мир. Скривен у срцу планине Борје, хотел Тајан је рај за одмор. Уживајте са својом породицом и пријатељима,  истражите живописне стазе, удахните мирис планинског ваздуха и створите незаборавне успомене.
                    </p>
                    <p>
                        Наших {cabins.length} удобних апартмана су само почетак, прави мир и слободу ћете пронаћи у шетњи кроз планинске шуме или посматрајући како звезде трепере удобно смјештени покрај камина.
                    </p>
                    <p>
                        Овдjе се стварају незаборавни тренуци, окружени прелијепом природoм. То је мјесто гдје можете успорити, опустити се и осјетити радост дружења са породицом или пријатељима. Уживајте у свакој минути, док вас природа подсјећа на важност веза и тренутака које дијелите.
                    </p>
                </div>
            </div>

            <div className="col-span-2">
                <Image
                    src={image1}
                    alt="Porodica sjedi pokraj kamina"
                    placeholder="blur"
                    quality={80}
                />
            </div>

            <div className="aspect-square col-span-2">
                <Image
                    src={image2}
                    className="object-cover"
                    alt="Porodica uziva u prirodi"
                    quality={80}

                    placeholder="blur"

                />
            </div>

            <div className="col-span-3">
                <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                    Дочекујемо госте још од 1962. године
                </h1>

                <div className="space-y-8">
                    <p>
                        Од 1962. године, хотел Тајан је вољено породично уточиште. Основано од наших деда и бака, ова оаза је негована с љубављу и пажњом, преносећи се кроз нашу породицу као доказ наше посвећености стварању топлог и пријатног окружења. Овде свака генерација оставља свој печат, а наш циљ је да сви гости осете ту исту породичну добродошлицу.
                    </p>
                    <p>
                        Током година, успели смо да очувамо суштину хотела Тајан, спајајући безвремену лепоту планина с личним дотаком који само породица може да понуди. Овде нисте само гост; ви сте део наше проширене породице. Зато нам се придружите у хотелу Тајан ускоро, где традиција сусреће спокој, а свака посета изгледа као повратак кући.
                    </p>

                    <div>
                        <Link
                            href="/cabins"
                            className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
                        >
                            Погледајте апартмане
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;