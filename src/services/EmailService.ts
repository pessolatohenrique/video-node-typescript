interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachments?: Array<String>;
}

interface IMailDTO {
  to: IMailTo;
  message: IMailMessage;
}

class EmailService {
  async sendEmail({ to, message }: IMailDTO) {
    console.log(`Send message e-mail: ${to}; ${message}`);
    return { to, message };
  }
}

export default EmailService;
