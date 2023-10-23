import React from 'react'
import Upload from './icons/Upload'
import Upperline from './icons/Upperline'
import LowerLine from './icons/LowerLine'

const PublishDoc = () => {
  return (
    <div className='w-[70%] upload-doc flex'>
        <div className='w-[25%] cursor-pointer m-5 p-5 rounded-[3rem] bg-white flex flex-col items-center'>
           <Upload/>
           <h3 className='upload-doc-button'> upload doc </h3>
        </div>
        <div>

        <div className='upload-doc-important mt-5'>
            Important
        </div>
        <div className='upload-doc-content mt-3'>
        Upload All correspondence <br/> received from creditors and the credit bureaus.
        </div>
        </div>

        <div className='flex flex-col min-h-full justify-between items-end flex-1 relative'>
            <div className='absolute'>
            <Upperline/>
            
            </div>
            <div className='absolute'>
            <LowerLine/>
            
            </div>

           <button className='publish-doc-button px-5 py-3 mt-auto mr-auto mb-5'>
             Publish
           </button>
        </div>
        
    </div>
  )
}

export default PublishDoc