import React from 'react'
import { useField } from 'formik'
import { FormField,Label } from 'semantic-ui-react';

export default function KodlamaIoTextInput({ ...props }) {
    // console.log(props);
    const [field, meta] = useField(props)
    //console.log(meta);
    //meta hata var mı yok mu onun bilgisini verir.
    return (
        <FormField error={meta.touched && !!meta.error}> {/*touched true-false. -- meta touched ise ve hata varsa */}
            <input {...field}{...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label> 
            ):null}
            
        </FormField>
    )
}
