npx eslint --init
adicionar os pacotes recomendados como dependencias de desenvolvimento

# Regras

## necessario para analisar se os hooks estao sendo utilizados de forma correta

`yarn add eslint-plugin-react-hooks -D`

```
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}

```

## como iremos tipar com typescript, o prop-types sera desabilitado para nao dar warnings

```
{
  "rule": {
    "react/prop-types": "off"
  }
}
```

## diz que preciso explicitar o retorno em todas as funcoes que sao exportadas, mesmo que o retorno seja implícito

## desabilitar essa regra nao significa que voce nao deve tipar

```
{
  "rule": {
    "explicit-module-boundary-types": "off"
  }
}
```

## passar a versao do react por causa do plugin do react

## isso é para o lint nao reclamar que nao encontrou a versao do react

```
  "settings": {
    "react": {
      "version": "detect"
    }
  }
```

# o seu VSCode necessita utilizar extensoes de ESLint e Prettier
