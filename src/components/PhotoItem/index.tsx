import * as C from "./styles";

type Props = {
    name: string;
    url: string;
}

export const PhotoItem = ({name, url}: Props) => {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
        </C.Container>
    );
};