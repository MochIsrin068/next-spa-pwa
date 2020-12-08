
const packageServices = [
    {
        title : "Web Development",
        items : ["Frontend ( React )", "Backend ( Firebase )", "Oauth ( Google & Facebook )", "Hosting"],
        image : '/images/desktop-illustration.svg'
    },
    {
        title : "Mobile Development",
        items : ["Frontend ( React Native )", "Backend ( Firebase )", "Oauth ( Google & Facebook )", "Deploy To playStore"],
        image : '/images/mobile-illustration.svg'
    },
    {
        title : "UI/UX Design",
        items : ["Figma", "Adobe Photoshop"],
        image : '/images/design-illustration.svg'
    }
]

const Services = () => {
    return (
        <div className="content-services" id="services">
            <div className="content-services__header">
            <h2>Our Services</h2>
            <span>Build your application with Our service and make your business Grow.</span>
            </div>
            <div className="content-services__body">
                {packageServices.map((service, index )=> {
                return (
                    <div key={index}>
                        {/* <img src="/images/package.svg" alt="" /> */}
                        <img src={service.image} alt="" />
                        <h3>{service.title}</h3>
                        <div>
                        {service.items.map(item => {
                            return (
                            <div>
                                <img src="/images/icon-check.svg" alt=""/>
                                <span>{item}</span>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                )
                })}
            </div>
        </div>
    )
} 

export default Services