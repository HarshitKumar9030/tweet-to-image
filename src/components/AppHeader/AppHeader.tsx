import { Anchor, Center, Title, Text } from "@mantine/core";
import "./AppHeader.css";

const AppHeader = () => {
    return (
        <>
            <Title order={1} align="center">Tweet to Image</Title>
            <Text align="center">Download a Tweet as an Instagram-ready image</Text>
            <Center>
            <Anchor href="https://github.com/harshitkumar9030/tweet-to-image/issues/new/choose"
                target="_blank" align="center" className="anchor" size="sm">
                Have an idea?
            </Anchor>
            <Anchor href="https://github.com/harshitkumar9030/tweet-to-image/issues/new/choose"
                target="_blank" align="center" className="anchor" size="sm">
                Report an issue
            </Anchor>
            <Anchor href="https://donate.harshitkumar.tech/" target="_blank"
                align="center" className="anchor" size="sm">
                Support
            </Anchor>
            <Anchor href="https://harshitkumar.tech/" target="_blank" 
                align="center" className="anchor" size="sm">
                By Harshit Kumar
            </Anchor>
            </Center>
        </>
    );
};

export default AppHeader;