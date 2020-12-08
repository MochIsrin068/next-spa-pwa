
const users = [
    {
        name : "Viezh Robert",
        address : "Warsaw, Poland",
        comment : "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
        photo : "/images/avatar-one.png"
    },
    {
        name : "Yessica Christy",
        address : "Shanxi, China",
        comment : "“I like it because I like to travel far and still can connect with high speed.”.",
        photo : "/images/avatar-two.png"
    },
    {
        name : "Kim Young Jou",
        address : "Seoul, South Korea",
        comment : "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
        photo : "/images/avatar-three.png"
    }
]

const Testimonial = () => {
    return (
        <div className="content-testimonial" id="testimonial">
            <div className="content-testimonial__header">
            <h2>Trusted by Thousands of Happy Customer</h2>
            <span>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</span>
            </div>
            <div className="content-testimonial__body">
                {users.map((user, index )=> {
                return (
                    <div key={index}>
                        <div>
                            <img src={user.photo}/>
                            <div>
                                <h3>{user.name}</h3>
                                <span>{user.address}</span>
                            </div>
                        </div>
                        <p>{user.comment}</p>
                    </div>
                )
                })}
            </div>
        </div>
    )
} 

export default Testimonial