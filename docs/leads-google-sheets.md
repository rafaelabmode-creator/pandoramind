# Como receber os leads do assistente numa planilha do Google (grátis)

Cada pessoa que cadastra no assistente vira uma linha na sua planilha, com
data, nome, perfil, telefone, e-mail, motivo e se aceitou a newsletter.

## Passo 1 — Criar a planilha
1. Acesse https://sheets.google.com e crie uma planilha nova.
2. Dê um nome, ex.: **PandoraMind — Leads do Assistente**.

## Passo 2 — Colar o script
1. Na planilha, vá em **Extensões → Apps Script**.
2. Apague o conteúdo que estiver lá e cole o código do arquivo
   [`apps-script-leads.gs`](apps-script-leads.gs).
3. Clique no ícone de **salvar** (💾).

## Passo 3 — Publicar como App da Web
1. No topo direito, clique em **Implantar → Nova implantação**.
2. Em "Tipo", escolha **App da Web** (ícone de engrenagem → App da Web).
3. Configure:
   - **Executar como:** Eu (sua conta)
   - **Quem pode acessar:** **Qualquer pessoa**
4. Clique em **Implantar** e **autorize** o acesso (é normal o Google pedir
   permissão; escolha sua conta e confirme).
5. Copie a **URL do app da web** (termina em `/exec`).

## Passo 4 — Ligar na plataforma
Cole essa URL na variável de ambiente `LEAD_WEBHOOK_URL`.

- **Local (sua máquina):** no arquivo `.env`, coloque:
  ```
  LEAD_WEBHOOK_URL=https://script.google.com/macros/s/SEU_ID/exec
  ```
  Salve e reinicie o servidor (`Ctrl+C` e `npm run dev:full`).

- **Produção (Vercel):** adicione a mesma variável nas configurações do
  projeto (Settings → Environment Variables) quando publicarmos o site.

## Passo 5 — Testar
1. Abra o assistente (`/assistente`), preencha o cadastro e libere o acesso.
2. Volte à planilha: uma nova linha deve aparecer com os dados. 🎉

## Observações
- Se você atualizar o script depois, faça **Implantar → Gerenciar
  implantações → editar (lápis) → Nova versão** para publicar a mudança.
- A URL `/exec` é secreta — quem tiver ela pode enviar dados para a sua
  planilha. Se precisar trocar, é só criar uma nova implantação.
