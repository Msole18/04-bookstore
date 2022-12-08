import React, { useState } from 'react';

const CreatePage = () => {
   const [ title, setTitle ] = useState('');
   const [ author, setAuthor ] = useState('');
   const [ cover, setCover ] = useState('');
   const [ intro, setIntro ] = useState('');
   const [ completed, setCompleted ] = useState(false);
   const [ review, setReview ] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case 'title':
                setTitle(value);
                break;

            case 'author':
                setAuthor(value);
                break;

            case 'intro':
                setIntro(value);
                break;

            case 'completed':
                setCompleted(e.target.cheked);
                break;
            case 'review':
                setReview(value);
                break;
            default:

        }
    }
    const handleOnChangeFile = (e) => {
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setCover(reader.result.toString())
        }
    }
    const handleSubtmit = (e) => {
        e.preventDafault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review
        }
    }

  return (
    <div>
        <form onSubmit={handleSubtmit}>
            <div>
                <input type='text' name='title' value={title} onChange={handleChange}/>
            </div>
            <div>
                <input type='text' name='author' value={author} onChange={handleChange}/>
            </div>
            <div>
                <input type='file' name='cover' onChange={handleOnChangeFile}/>
                <div>{!!cover ? <img src={cover} width='200' alt='preview'/> : ''}</div>
            </div>
            <div>
                <input type='text' name='introdution' value={intro} onChange={handleChange}/>
            </div>
            <div>
                <input type='checkbox' name='completed' value={completed} onChange={handleChange}/>
            </div>
            <div>
                <input type='text' name='review' value={review} onChange={handleChange}/>
            </div>

            <input type='submit' value='Register Book' />
        </form>
    </div>
  )
}

export default CreatePage