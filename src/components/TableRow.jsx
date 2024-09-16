import React from 'react';
import { TableCell, TableRow, IconButton, Stack } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CallProgressBar, PutProgressBar } from '../utils/Styled';
import { getColorForCall, getColorForPut } from '../utils/utils';

const arrowIcons = [ArrowUpwardIcon, ArrowDownwardIcon, ArrowForwardIcon];

const TableRowComponent = ({ row, index, hoverRow, setHoverRow }) => (
  <TableRow
    key={index}
    onMouseEnter={() => setHoverRow(index)}
    onMouseLeave={() => setHoverRow(null)}
    style={{ position: 'relative' }}
  >
    {['gamma', 'vega', 'theta', 'callDelta', 'callOI'].map((key, idx) => (
      <TableCell
        key={idx}
        width={key === 'callOI' ? 300 : undefined}
        align={key === 'callOI' ? "center" : undefined}
        style={{ backgroundColor: getColorForCall(row.strike), border: '1px solid #b0bec5', position: 'relative' }}
      >
        {key === 'callOI' ? (
          <>
            <span style={{ position: 'relative', zIndex: 2 }}>{row[key]}</span>
            <CallProgressBar width={row[key]} />
            {hoverRow === index && (
              <Stack direction="row" spacing={1} style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}>
                {arrowIcons.map((Icon, i) => (
                  <IconButton key={i} size="small" color="primary">
                    <Icon />
                  </IconButton>
                ))}
              </Stack>
            )}
          </>
        ) : (
          row[key]
        )}
      </TableCell>
    ))}
    <TableCell align='center' style={{ border: '1px solid #b0bec5' }}>{row.strike}</TableCell>
    {['putOI', 'putDelta', 'theta', 'vega', 'gamma'].map((key, idx) => (
      <TableCell
        key={idx}
        width={key === 'putOI' ? 300 : undefined}
        align={key === 'putOI' ? "center" : undefined}
        style={{ backgroundColor: getColorForPut(row.strike), border: '1px solid #b0bec5', position: 'relative' }}
      >
        {key === 'putOI' ? (
          <>
            <span style={{ position: 'relative', zIndex: 2 }}>{row[key]}</span>
            <PutProgressBar width={row[key]} />
            {hoverRow === index && (
              <Stack direction="row" spacing={1} style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}>
                {arrowIcons.map((Icon, i) => (
                  <IconButton key={i} size="small" color="primary">
                    <Icon />
                  </IconButton>
                ))}
              </Stack>
            )}
          </>
        ) : (
          row[key]
        )}
      </TableCell>
    ))}
  </TableRow>
);

export default TableRowComponent;
