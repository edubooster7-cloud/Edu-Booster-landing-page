import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components"


interface WelcomeEmailProps {
    userFirstname?: string
}

export const WelcomeEmail = ({
    userFirstname = "Futur bachelier",
}: WelcomeEmailProps) => {
    const previewText = `Bienvenue sur EduBooster, ${userFirstname} !`

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`https://edubooster.app/logo.png`} // Placeholder logo
                                width="40"
                                height="37"
                                alt="EduBooster"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Bienvenue sur <strong>EduBooster</strong>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Bonjour {userFirstname},
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Merci de vous être inscrit sur notre liste d'attente. Vous avez fait le premier pas vers votre réussite à l'Exétat !
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Nous vous informerons dès que l'application sera disponible sur le Play Store et l'App Store. En attendant, préparez-vous à booster vos révisions.
                        </Text>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-[#6d28d9] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                href="https://edubooster.app"
                            >
                                Visiter notre site
                            </Button>
                        </Section>
                        <Text className="text-black text-[14px] leading-[24px]">
                            À très vite,
                            <br />
                            L'équipe EduBooster
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default WelcomeEmail
