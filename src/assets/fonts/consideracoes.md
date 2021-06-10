## Recurso exportados para um contexto unico
### Acesso aos recursos de forma unica, pelo contexto

<br>
<hr>

### Contexto das `fonts`
```
/fonts/montserrat     -> aqui temos o contexto da font montserrat, incluindo todas os seus estilos exportados
/fonts/public-sans    -> aqui temos o contexto da font public-sans, incluindo todas os seus estilos exportados
```
#### Como acessar os recursos do contexto fonts
```js
import { DeterminadaFonteFontFace } from './fonts';

```



### Contexto das `font-faces`
```js
// importacao do styled-components
import { css } from 'styled-components';

// exemplo de fontes importadas localmente de seus contextos
import { PublicSansMedium } from './public-sans';
import { PublicSansMedium } from './public-sans';

export const PublicSansFontFace = css`
  @font-face {
    font-family: 'PublicSans-Medium';
    src: url('${PublicSansMedium}');
  }
  @font-face {
    font-family: 'PublicSans-Regular';
    src: url('${PublicSansRegular}');
  }
  @font-face {
    font-family: 'PublicSans-Regular';
    src: url('${PublicSansSemiBold}');
  }
`;
```
#### Como acessar os recursos do contexto font-faces

```js
import { DeterminadaFonteFontFace } from './fonts';

```



### Contexto das `fonts externas`
```js
import { css } from 'styled-components';

export const RobotoFont = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
`;
```