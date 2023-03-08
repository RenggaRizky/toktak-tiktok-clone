import PostMd from "@/components/PostMd";
import Container from "@/layouts/Container";
import MainContent from "@/layouts/MainContent";

const home = () => {
    return (
        <Container classMain='container-lg gx-0 gx-lg-4 d-flex'>
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

export default home;
