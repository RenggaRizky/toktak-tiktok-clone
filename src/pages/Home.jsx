import PostMd from "@/components/PostMd";
import Container from "@/layouts/Container";
import MainContent from "@/layouts/MainContent";

const Home = () => {
    return (
        <Container>
            <MainContent>
                <PostMd />
                <PostMd />
                <PostMd />
                <PostMd />
                <PostMd />
            </MainContent>
        </Container>
    );
};

export default Home;
