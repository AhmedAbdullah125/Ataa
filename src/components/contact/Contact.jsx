'use client'
import React from 'react'; // Importing React to use JSX syntax and create components.
import GreenPageTitle from '@/components/sharing/GreenPageTitle';
import { Input } from '../ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'; // For form validation using Zod schema
import { z } from 'zod'; // Zod library for schema-based validation
import { Button } from '@/components/ui/button'; // Button UI component
import { Form, FormField, FormItem, FormControl, FormMessage, } from '@/components/ui/form';
import { useState } from 'react'; // State management hook
import logOutIcon from '/public/icons/logoutblach.svg'
import Image from 'next/image';
import { review } from './review';
import { API_BASE_URL } from '@/lib/apiConfig';
export default function About() { // Defining the main functional component named 'Footer'.
    const FormSchema = z.object({
        feedback: z.string().min(10, { message: 'Phone number must be at least 10 characters.' }),
        name: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
        email: z.string().email({ message: 'Invalid email address.' }),
        message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
    });
    // Additional state variables for managing API call status
    const [loading, setLoading] = useState(false); // Loading state for API requests
    // Initialize React Hook Form with Zod validation schema
    const form = useForm({
        resolver: zodResolver(FormSchema), // Use Zod schema for validation
        defaultValues: {
            name: '',
            email: '',
            message: '',
            feedback: '',
        }, // Default form values
    });
    const handleSubmit = async (data) => {
        await review(API_BASE_URL, data, setLoading);
    };
    // Form submission handler
    function onSubmit(data) {
        handleSubmit(data); // Call API request function
        // form.reset(); // Reset form fields
    }
    return (
        <div className="about has-green-title">
            <GreenPageTitle firstPArt={"اتصل "} secondPart={"بنا"} thirdPart={".!"} />
            <section className='section-with-yellow-title'>
                <div className="text">
                    <h5>أهلا بك في مؤسسة عطاء العالمية</h5>
                    <div className="hagez"></div>
                    <h2>كيف يمكننا مساعدتك؟<br /> تواصل معنا على مدار اليوم 24/7.</h2>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='contact-form'>
                        {/* Phone number input field */}
                        <div className="name-email-cont">
                            <FormField control={form.control} name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="الاسم الثلاثي"  {...field} />
                                        </FormControl>
                                        <FormMessage /> {/* Validation error message */}
                                    </FormItem>
                                )}
                            />
                            <FormField control={form.control} name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="البريد الالكتروني"  {...field} />
                                        </FormControl>
                                        <FormMessage /> {/* Validation error message */}
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField control={form.control} name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="ادخل موضوع الرسالة"  {...field} />
                                    </FormControl>
                                    <FormMessage /> {/* Validation error message */}
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="feedback"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea placeholder="اكتب هنا..."  {...field} />
                                    </FormControl>
                                    <FormMessage /> {/* Validation error message */}
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Loading...' : 
                            <><span>ارســـال الرسالة</span> <Image src={logOutIcon} alt="logout" /> </>
                            }
                        </Button>
                    </form>
                </Form>
            </section>
        </div>
    )
}
