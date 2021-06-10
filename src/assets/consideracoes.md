## Recurso exportados para um contexto unico
### Acesso aos recursos de forma unica, pelo contexto

<br>

**Ex.:**

#### Cenário comum
```js
import IconCarro from './icons';
import IconChave from './icons';
import IconBanco from './icons';

```



#### Cenário proposto
```js
import { IconCarro, IconChave, IconBanco} from './icons';
```

reduzimos a quantidade de importacoes