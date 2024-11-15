import * as React from 'react';
import { Badge } from '@patternfly/react-core';

import { useTranslation } from '../../hooks/useTranslation';
import { usePendingEnrollmentRequestsCount } from '../../hooks/usePendingEnrollmentRequestsCount';
import WithTooltip from '../common/WithTooltip';

import './PendingEnrollmentRequestsBadge.css';

const PendingEnrollmentRequestsBadge = () => {
  const { t } = useTranslation();
  const [count] = usePendingEnrollmentRequestsCount();
  if (count === 0) {
    return null;
  }

  const text = t('{{ count }} devices pending approval', { count });
  return (
    <Badge className="fctl-separator--left" screenReaderText={text}>
      <WithTooltip showTooltip content={text}>
        <span>{count}</span>
      </WithTooltip>
    </Badge>
  );
};

export default PendingEnrollmentRequestsBadge;
