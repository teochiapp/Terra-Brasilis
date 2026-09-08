import styled from 'styled-components';
import { MapPin, Mail, Phone } from 'lucide-react';

// ─── Estilos ─────────────────────────────────────────────────────────────────

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 350px;
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
  background-image: url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow-md);
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  color: var(--color-secondary);
  flex-shrink: 0;
  margin-top: 2px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const Label = styled.span`
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-widest);
  text-transform: uppercase;
  color: var(--color-secondary);
`;

const Value = styled.span`
  font-family: var(--font-body);
  font-size: var(--font-size-lg);
  color: var(--color-heading);
  line-height: var(--line-height-relaxed);
  font-weight: var(--font-weight-medium);
`;

// ─── Componente ───────────────────────────────────────────────────────────────

function ContactInfo() {
  return (
    <InfoWrapper>
      <ImagePlaceholder aria-label="Imagen de la finca" />
      
      <InfoList>
        <InfoItem>
          <IconWrapper>
            <MapPin strokeWidth={1.5} size={28} />
          </IconWrapper>
          <TextContent>
            <Label>Ubicación</Label>
            <Value>Ruta Provincial 15, Km 22<br />Mendoza, Argentina</Value>
          </TextContent>
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <Mail strokeWidth={1.5} size={28} />
          </IconWrapper>
          <TextContent>
            <Label>Email</Label>
            <Value>contacto@terrabrasilis.com</Value>
          </TextContent>
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <Phone strokeWidth={1.5} size={28} />
          </IconWrapper>
          <TextContent>
            <Label>Teléfono</Label>
            <Value>+54 9 261 123 4567</Value>
          </TextContent>
        </InfoItem>
      </InfoList>
    </InfoWrapper>
  );
}

export default ContactInfo;
