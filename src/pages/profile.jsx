import Profile from "@/components/Profile";
import Container from "@/layouts/Container";
import ProfileContent from "@/layouts/ProfileContent";

const profile = () => {
    return (
        <Container classMain='container-lg gx-0 gx-lg-4'>
            <ProfileContent>
                <Profile />
            </ProfileContent>
        </Container>
    );
};

export default profile;
