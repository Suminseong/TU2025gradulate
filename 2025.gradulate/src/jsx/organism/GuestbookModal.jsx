// src/jsx/organism/GuestbookModal.jsx
// GPT-5 Thinking: converted inline styles to styled-components (values unchanged)
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
`;
const Wrapper = styled.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
`;
const Glass = styled.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
`;
const Row = styled.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
`;
const Card = styled.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
`;
const DecoBig = styled.div`
  position: absolute; left: 66.53px; top: 314.67px; width: 248.47px; height: 245.33px; border-radius: 9999px; background: #EDECF2;
`;
const DecoDot = styled.div`
  position: absolute; left: 13.33px; top: 504.92px; width: 42.14px; height: 41.05px; border-radius: 9999px; background: #EDECF2;
`;
const TitleRow = styled.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
`;
const LabelTo = styled.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
`;
const ToInput = styled.input`
  border: none; outline: none;
  border-bottom: 1px solid rgba(0,0,0,.18);
  background: transparent;
  font-family: Pretendard, system-ui;
  font-size: 28px; color: #303030;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 220px;
`;
const ContentWrap = styled.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
`;
const Textarea = styled.textarea`
  width: 100%; min-height: 220px; resize: none;
  border: none; outline: none;
  border-radius: 12px; padding: 14px 16px;
  font-family: Pretendard, system-ui; font-size: 18px; line-height: 27px; color: #303030;
  background: rgba(255,255,255,.6);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.5);
`;
const FromRow = styled.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
`;
const LabelFrom = styled.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
`;
const FromInput = styled.input`
  border: none; outline: none;
  border-bottom: 1px solid rgba(0,0,0,.18);
  background: transparent;
  font-family: Pretendard, system-ui; font-size: 20px; color: #303030;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 180px;
`;
const SideCol = styled.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
`;
const SendBtn = styled.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
`;
const SendInner = styled.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
`;
const CloseRail = styled.div`
  width: 60px; height: 640px; position: relative;
`;
const CloseBox = styled.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
`;
const CloseInner = styled.div`
  width: 32px; height: 32px; position: relative;
`;
const CloseStroke = styled.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${props => props.$deg}deg);
`;

export default function GuestbookModal({
  open,
  onClose,
  onSubmit,
  defaultTo = '',
  defaultFrom = '',
}) {
  const [toName, setToName] = useState(defaultTo);
  const [fromName, setFromName] = useState(defaultFrom);
  const [message, setMessage] = useState('');
  const overlayRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose?.();
  };

  const submit = () => {
    const data = { to: (toName || '').trim(), from: (fromName || '').trim(), message: (message || '').trim() };
    if (!data.message) return;
    onSubmit?.(data);
  };

  return (
    <Overlay ref={overlayRef} onMouseDown={handleOverlayClick}>
      <Wrapper onMouseDown={(e) => e.stopPropagation()}>
        <Glass>
          <Row>
            <Card>
              <DecoBig />
              <DecoDot />
              <TitleRow>
                <LabelTo>To.</LabelTo>
                <ToInput
                  value={toName}
                  onChange={(e) => setToName(e.target.value)}
                  placeholder="받는 사람"
                />
              </TitleRow>
              <ContentWrap>
                <Textarea
                  placeholder="내용을 입력해 주세요."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </ContentWrap>
              <FromRow>
                <LabelFrom>From.</LabelFrom>
                <FromInput
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  placeholder="보내는 사람"
                />
              </FromRow>
            </Card>
            <SideCol>
              <SendBtn type="button" onClick={submit} aria-label="send">
                <SendInner />
              </SendBtn>
            </SideCol>
          </Row>
        </Glass>
        <CloseRail>
          <CloseBox type="button" onClick={onClose} aria-label="close">
            <CloseInner>
              <CloseStroke $deg={45} />
              <CloseStroke $deg={-45} />
            </CloseInner>
          </CloseBox>
        </CloseRail>
      </Wrapper>
    </Overlay>
  );
}
