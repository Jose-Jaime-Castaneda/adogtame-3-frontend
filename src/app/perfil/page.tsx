import { cookies } from "next/headers";
import { Loader } from "../components/loader/loader";
import { Navbar } from "../components/navbar/navbar"
import { ProfileForm } from "../components/user-profile-form/user-profile-form";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Sidebar } from "../components/sidebar/sidebar"
import Image from "next/image";

async function getUser(): Promise<any> {
    const userCookie: RequestCookie | undefined = cookies().get('userInfo');
    const user: any = userCookie ? JSON.parse(userCookie.value) : null;

    return user
}

export default async function ProfileView() {
    const user = await getUser()

    if (!user) return <Loader />

    const getImage = (): string => {
        return user?.imagen === 'defaulf.png' ? 'http://placekitten.com/200/300' : `${user?.imagen}`
    };

    return (
        <>
            <Navbar />
            <section className="d-flex" style={{ maxWidth: '99vw', minHeight: '90vh' }}>
                <Sidebar />
                <div className="d-flex flex-grow-1 mt-2 justify-content-center align-items-start rounded" style={{ backgroundColor: '#f9f9f9' }}>
                    <div className="p-2 d-flex flex-column align-items-center justify-content-center" style={{ width: '50%' }}>
                        <div className="rounded-circle overflow-hidden border mb-4 d-flex justify-content-center align-items-center" style={{ width: '150px', height: '150px' }}>
                            <Image
                                src={`${getImage()}`}
                                alt="Profile Image"
                                width={150}
                                height={150}
                                className="img-fluid"
                            />
                        </div>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </div>

                    <div className="p-2 d-flex flex-column justify-content-center align-items-center rounded" style={{ width: '50%' }}>
                        <ProfileForm
                            user={user}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
