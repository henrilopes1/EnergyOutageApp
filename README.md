# Energy Outage App

Aplicativo para registro e acompanhamento de apagões de energia, desenvolvido com React Native.

## 📱 Funcionalidades

- Registro de ocorrências de apagões
- Acompanhamento da duração dos eventos
- Localização dos incidentes
- Registro de impactos causados
- Recomendações de segurança
- Histórico de eventos

## 🛠 Tecnologias Utilizadas

- React Native
- TypeScript
- Styled Components
- React Navigation
- Async Storage
- Moti (Animações)

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- React Native CLI

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/energy-outage-app.git
cd energy-outage-app
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o Metro Bundler:
```bash
npx expo start
```

## 📱 Estrutura do Projeto

```
src/
  ├── components/      # Componentes reutilizáveis
  ├── screens/         # Telas do aplicativo
  ├── navigation/      # Configuração de navegação
  ├── services/        # Serviços (storage, etc)
  ├── styles/         # Temas e estilos globais
  ├── types/          # Definições de tipos TypeScript
  └── utils/          # Funções utilitárias
```

## 🎯 Principais Telas

### Tela Inicial (Overview)
- Lista de eventos registrados
- Botão para adicionar novo registro
- Visualização de duração e data dos eventos

### Localização
- Registro da cidade
- Registro do bairro
- Entrada de CEP

### Duração
- Registro de dias
- Registro de horas
- Registro de minutos

### Impacto
- Descrição dos prejuízos
- Registro de ocorrências

### Recomendações
- Lista de medidas de segurança
- Dicas de prevenção
- Finalização do registro

## 🔒 Storage

O aplicativo utiliza AsyncStorage para persistência local dos dados, armazenando:
- Registros de apagões
- Localizações
- Durações
- Impactos


## 👨‍💻 Grupo

- Henri de Oliveira Lopes - RM98347
- Lorenzo Gomes Andreata  - RM551117