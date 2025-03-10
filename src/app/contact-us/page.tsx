export default function ContactUs() {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-6">
            {/* Page Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
                <p className="text-lg text-base-content mt-2">
                    We'd love to hear from you! Reach out with any inquiries or
                    feedback.
                </p>
            </div>

            {/* Contact Form & Info */}
            <div className="w-full max-w-6xl bg-base-200 p-10 shadow-xl rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-primary">
                        Send Us a Message
                    </h2>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input input-bordered w-full"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full h-32"
                    ></textarea>
                    <button className="btn btn-primary w-full py-3 text-lg">
                        Send Message
                    </button>
                </div>

                {/* Contact Information */}
                <div className="bg-neutral text-neutral-content p-8 rounded-2xl space-y-6">
                    <h2 className="text-2xl font-semibold text-primary">
                        Contact Information
                    </h2>
                    <p className="">
                        Reach out to us through the following contact details.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 rounded-badge bg-base-100 text-base-content p-2">
                            <div className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">
                                📍
                            </div>
                            <p>123 Street Name, City, Country</p>
                        </div>
                        <div className="flex items-center gap-4 rounded-badge bg-base-100 text-base-content p-2">
                            <div className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">
                                📞
                            </div>
                            <p>+123 456 7890</p>
                        </div>
                        <div className="flex items-center gap-4 rounded-badge bg-base-100 text-base-content p-2">
                            <div className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">
                                📧
                            </div>
                            <p>contact@yourwebsite.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
