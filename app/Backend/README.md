<h1>Tecnologias<h1>
<ul>
  <li>Python</li>
</ul>

<h1>Requisitos funcionais</h1>
 
 <table>
  <caption>User</caption>
  <tr>
    <th>Descrição:</th>
    <td>Criação de novo User e edição de seus dados</td>
  </tr>
  <tr>
    <th>Entrada:</th>
    <td>
      <ul>
        <li>nome</li>
        <li>sobrenome</li>
        <li>email</li>
        <li>telefone</li>
        <li>cpf/cnpj</li>
        <li>idade</li>
        <li>cidade</li>
        <li>estado</li>
        <li>senha</li>
      </ul>
    </td>
  </tr>
   <tr>
    <th>Saida:</th>
    <td>Autorização de acesso</td>
  </tr>
  <tr>
    <th>Restrições lógicas:</th>
    <td>
      <ul>
        <li>Não pode cadastrar um email já cadastrado</li>
        <li>Não pode cadastrar um cpf/cnpj já cadastrado</li>
        <li>Pode se cadastrar novo User por meio de uma conta google</li>
        <li>Ao cadastrar email deve solicitar confirmação</li>
        <li>Ao cadastrar senha deve solicitar confirmação</li>
      </ul>
    </td>
  </tr>
 </table>

<table>
  <caption>Marketplaces</caption>
  <tr>
    <th>Descrição:</th>
    <td>
      O User autentica o acesso a suas contas em marketplaces, o inserindo em uma lista de marketplaces
    </td>
  </tr>
  <tr>
    <th>Entrada:</th>
    <td>
      <ul>
        <li>Login do marketplace</li>
        <li>Senha do marketplace</li>
      </ul>
    </td>
  </tr>
   <tr>
    <th>Saida:</th>
    <td>Gera lista de Products, e permite receber Questions de Customer</td>
  </tr>
  <tr>
    <th>Restrições lógicas:</th>
    <td>
      <ul>
        <li>Não deve autorizar o cadastro da mesma conta de um mesmo marketplace</li>
      </ul>
    </td>
  </tr>
 </table>

 <table>
  <caption>Products</caption>
  <tr>
    <th>Descrição:</th>
    <td>
       O software deve permitir a listagem de Products cadastrados nos marketplaces e anexar Question com suas opções de Answers a eles.<br>
      Quando Question é trazida de uma Api de Marketplace deve trazer o Product referente junto.
    </td>
  </tr>
  <tr>
    <th>Entrada:</th>
    <td>
      <ul>
        <li>Questions</li>
      </ul>
    </td>
  </tr>
   <tr>
    <th>Saida:</th>
    <td>Products serão adicionados na lista de Products</td>
  </tr>
  <tr>
    <th>Restrições lógicas:</th>
    <td>
      <ul>
        <li>Não pode criar novos Products</li>
        <li>Recebe Products exclusivamentedas api’s</li>
      </ul>
    </td>
  </tr>
 </table>

<table>
  <caption>Characteristic</caption>
  <tr>
    <th>Descrição:</th>
    <td>
      O software deve permitir a listagem de Characteristic e seus respectivos Values de cada Products cadastrados nos marketplaces e permitir que Question sejam direcionadas a Characteristic.
    </td>
  </tr>
  <tr>
    <th>Entrada:</th>
    <td>
      <ul>
        <li>Characteristic</li>
      </ul>
    </td>
  </tr>
   <tr>
    <th>Saida:</th>
    <td>Characteristic serão anexadas a seus  Products respectivos</td>
  </tr>
  <tr>
    <th>Restrições lógicas:</th>
    <td>
      <ul>
        <li>Não pode criar novas Characteristic</li>
        <li>Recebe Characteristic exclusivamente dos  Products vindo das api’s</li>
      </ul>
    </td>
  </tr>
 </table>

 <table>
  <caption>Question</caption>
  <tr>
    <th>Descrição:</th>
    <td>
       O software deve permitir que o User possa cadastrar Questions referenciais e anexar suas Answers a elas, receber Questions vindas das api’s e deve dar a possibilidade de assimilar(like) a Question referente. As Question podem ser duplicadas.
    </td>
  </tr>
  <tr>
    <th>Entrada:</th>
    <td>
      <ul>
        <li>Question descritiva</li>
        <li>Answers</li>
      </ul>
    </td>
  </tr>
   <tr>
    <th>Saida:</th>
    <td> 
      Question será adicionada a um Product, Quando question vinda de api ela passa pelo feed de questions e após ser respondida vai para feed de perguntas respondidas. 
    </td>
  </tr>
  <tr>
    <th>Restrições lógicas:</th>
    <td>
      <ul>
        <li>Uma Question deve ser associada a um Product</li>
        <li>Uma Question pode ser associada a uma Characteristic de um Product</li>
        <li>Ao criar uma Question ela deve conter uma ou mais Answers</li>
        <li>A Question deve aceitar uma Answer automática</li>
        <li>Ao receber uma nova Question de uma Api:</li>
          <ol>
            <li>O User deve ser notificado caso</li> 
            <li>
              Deve ser buscar similaridade com as Questions referentes cadastradas no Product:
            </li>
              <ol>
                <li>
                  Caso não haja Answer selecionada como automática deve ser apresentado as opções de Answers cadastras para o Product
                </li>
                <li>
                  Caso não haja Answers cadastradas deve sugerir para que o User cadastre a Question e suas   respectivas Answers
                </li>
                <li>
                  Caso  a Question seja expressada de forma diferente mas que represente o mesmo resultado que  uma Question cadastrada possa ser selecionado a similaridade de tal e e tornado como pergunta  de referência tbm
                </li>
              </ol>
          </ol>
      </ul>
    </td>
  </tr>
 </table>

 <table>
  <caption>Answers</caption>
  <tr>
    <th>Descrição:</th>
    <td>
      Permite a criação de Answers, anexar a Questions, programar Answers automáticas 
    </td>
  </tr>
  <tr>
    <th>Entrada:</th>
    <td>
      <ul>
        <li>Answer descritiva</li>
      </ul>
    </td>
  </tr>
   <tr>
    <th>Saida:</th>
    <td>Anexa-se a Question referente, ou quando Question vem de api Answer é retornada.</td>
  </tr>
  <tr>
    <th>Restrições lógicas:</th>
    <td>
      <ul>
        <li>Uma Answer deve ser associada a uma Question</li>
        <li>Deve permitir selecionar uma Answer como Answer automática</li>
      </ul>
    </td>
  </tr>
 </table>

 <table>
  <caption>Costumer</caption>
  <tr>
    <th>Descrição:</th>
    <td>Vem em conjunto a Question da api para identificar o cliente.</td>
  </tr>
  <tr>
    <th>Entrada:</th>
    <td>
      <ul>
        <li>name</li>
        <li>image</li>
      </ul>
    </td>
  </tr>
   <tr>
    <th>Saida:</th>
    <td>Anexa-se a Question quando vinda da api</td>
  </tr>
  <tr>
    <th>Restrições lógicas:</th>
    <td>
      <ul>
        <li>Não manipulável pelo usuário</li>
        <li>Vem através da api</li>
      </ul>
    </td>
  </tr>
 </table>
