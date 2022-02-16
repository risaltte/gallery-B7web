import * as C from "./styles";

type Props = {
    name: string;
    url: string;
    onDeleteFile: (fileName: string) => void;
}

export const PhotoItem = ({name, url, onDeleteFile}: Props) => {
    const handleDeleteImage = async (name: string) => {
        onDeleteFile(name);
    };

    return (
        <C.Container>
            <div className="imageBox">
                <img src={url} alt={name} />
                <span>{name}</span>
            </div>
            
            <button onClick={() => handleDeleteImage(name)}>
                Deletar
            </button>
        </C.Container>
    );
};