import React, { Suspense } from 'react'
import Image from 'next/image'
import { AppointmentForm } from '@/components/forms/AppointmentForm'
import { getPatient } from '@/lib/actions/patient.actions'

export default async function NewAppointment({params:{userId}}:SearchParamProps) {

    const patient = await getPatient(userId)
  return (
    <div className="flex h-screen max-h-screen">
      <Suspense fallback={<div>WAAAAIT 😭</div>}>
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
          src="/assets/icons/logo-full.svg"
          alt="logo"
          width={1000}
          height = {1000}
          className="mb-12 h-10 w-fit"
          />


          <AppointmentForm 
          type="create"
          userId={userId}
          patientId={patient.$id}
          />

    
         
            <p className="copyright mt-10 py-12">&copy; 2024 CarePulse</p>
          
            </div>
      </section>
      <Image
      src="/assets/images/appointment-img.png"
      height={1000}
      width={1000}
      alt="appointment image"
      className="side-img max-w-[390px] bg-bottom"
     />
     </Suspense>
    </div>
  )
}


