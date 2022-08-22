export interface Character {
  id: number
  name: string
  status: string
  nickname: string
  image: string

}

export interface CharacterDetail extends Character{
  birthday: string
  actor: string
  occupation: string[]
}

export interface CharactersFromApi {
    appearance: number[];
    better_call_saul_appearance: number[];
    birthday: string;
    category: string;
    char_id: number;
    img: string;
    name: string;
    nickname: string;
    occupation: string[];
    portrayed: string;
    status: string;
   }
