import { Save } from 'react-feather';

import { AppWrapper } from '@/components/AppWrapper';
import { GradientActionButton } from '@/components/GradientActionButton';
import { FormFieldInput } from '@/components/FormFieldInput';

import {
  TaskForm,
  TaskFormContainer,
  TaskFormFooter,
  TaskFormRow,
  TaskMapContainer
} from './styles';

function RegisterTask() {
  return (
    <AppWrapper backTo="/tasks"  title="Criar Tarefa">
      <TaskFormContainer>
        <TaskForm>
          <TaskFormRow>
            <FormFieldInput label="Colaborador" />
            <FormFieldInput label="Data Objetivo" />
            <FormFieldInput label="Data Criação" />
          </TaskFormRow>

          <TaskFormRow>
            <FormFieldInput label="CEP" />
            <FormFieldInput label="Endereço" />
            <FormFieldInput label="Número" />
          </TaskFormRow>

          <TaskFormRow>
            <FormFieldInput label="Referência" />
          </TaskFormRow>

          <TaskFormRow>
            <FormFieldInput label="Bairro" />
            <FormFieldInput label="Cidade" />
            <FormFieldInput label="Estado" />
          </TaskFormRow>
        </TaskForm>

        <TaskMapContainer>

        </TaskMapContainer>

        <TaskFormFooter>
          <GradientActionButton>
            <Save size={24} />
            Salvar
          </GradientActionButton>
        </TaskFormFooter>
      </TaskFormContainer>
    </AppWrapper>
  );
}

export default RegisterTask;