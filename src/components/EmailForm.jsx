import React, { useState } from "react";
import { useForm } from '@formspree/react';

 const EmailForm = () => {
    const [state, handleSubmit] = useForm("xjkoyrgo");
    const [email, setEmail] = useState("");

    return (
        <section className="px-3">
            <div className="email-section container p-3">
                <div className="row row-gap-3">
                    <div className="col-12 col-lg-5">
                        <h3 className="fw-bold text-center text-lg-start">
                            See My Projects At Once & Leave Here Your E-mail Address
                        </h3>
                    </div>
                    <div className="email-form col-12 col-lg-7 d-flex justify-content-center align-items-center">
                        <form className="w-100" onSubmit={handleSubmit}>
                            <div className="email-box">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email Address" 
                                    required 
                                    autoComplete="off"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={state.submitting || state.succeeded}
                                />
                                <button 
                                    type="submit"
                                    disabled={state.submitting || state.succeeded || !email}
                                >
                                    {state.submitting ? "Submitting..." : state.succeeded ? "Submitted!" : "Submit"}
                                </button>
                            </div>
                            {state.succeeded && (
                                <div className="success-message mt-2" style={{ color: 'green' }}>
                                    Thank you! We'll keep you updated.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default React.memo(EmailForm);