import PostMd from "@/components/PostMd";
import Container from "@/layouts/Container";
import MainContent from "@/layouts/MainContent";

const Home = () => {
    return (
        <Container>
            <MainContent>
                <PostMd />
                <hr className='mb-4' />
                <PostMd />
                <hr className='mb-4' />
                <PostMd />
                <hr className='mb-4' />
                <PostMd />
                <hr className='mb-4' />
                <PostMd />
            </MainContent>
        </Container>
    );
};

export default Home;
