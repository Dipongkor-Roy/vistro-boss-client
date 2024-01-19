

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="text-center mx-auto md:w-4/12 mb-12">
            <p className=" text-yellow-600 text-2xl mb-2">{subheading}</p>
            <p className="text-3xl text-black uppercase border-y-2 py-3">{heading}</p>
        </div>
    );
};

export default SectionTitle;