import { useAuth0 } from '@auth0/auth0-react';
import { ManageAccounts, School } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { USER_ROLES } from '@/constants';
import { NAVY_BLUE } from '@/theme';

export const useAuth = () => {
  const { isAuthenticated, handleRedirectCallback } = useAuth0();
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>();

  // TODO: Call backend API to update the role
  const handleUpdateRole = () => {};

  const syncUser = useCallback(async () => {
    if (!isAuthenticated) return;

    handleRedirectCallback().then(({ appState }) => {
      console.log(appState);
      if (!appState.role) {
        setIsRoleDialogOpen(true);
      }
    });

    // TODO: Call the backend API to update the role (or if role is not found in the app state, ask for a role selection and sync with backend)
  }, [handleRedirectCallback, isAuthenticated]);

  useEffect(() => {
    syncUser();
  }, [syncUser]);

  const activeBorderCandidate = '1px solid #8B5CF6';
  const activeBorderAdmin = '1px solid #6366F1';

  const roleConfirmation = (
    <Dialog open={isRoleDialogOpen}>
      <DialogTitle>
        <Typography variant="h5">Complete Your Sign Up</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Before we setup your account, please choose how you'll be using
          QuizMaster. This helps us give you the right experience.
        </DialogContentText>
        <Box display="flex" gap={16} marginTop={24}>
          <Card
            onClick={() => setSelectedRole(USER_ROLES.candidate)}
            tabIndex={1}
            variant="outlined"
            sx={{
              background: NAVY_BLUE[700],
              cursor: 'pointer',
              flexGrow: 1,
              '&:hover': { border: activeBorderCandidate },
              ...(selectedRole === USER_ROLES.candidate && {
                border: activeBorderAdmin,
              }),
            }}
          >
            <CardContent>
              <School sx={{ color: '#8B5CF6', fontSize: 28 }} />
              <Typography component="h3" variant="h6">
                Candidate
              </Typography>
              <Typography fontSize={12}>
                I want to take quizzes and track my progress.
              </Typography>
            </CardContent>
          </Card>
          <Card
            onClick={() => setSelectedRole(USER_ROLES.admin)}
            tabIndex={1}
            variant="outlined"
            sx={{
              cursor: 'pointer',
              background: NAVY_BLUE[700],
              flexGrow: 1,
              '&:hover': { border: activeBorderAdmin },
              ...(selectedRole === USER_ROLES.admin && {
                border: activeBorderAdmin,
              }),
            }}
          >
            <CardContent>
              <ManageAccounts sx={{ color: '#6366F1', fontSize: 28 }} />
              <Typography component="h3" variant="h6">
                Admin
              </Typography>
              <Typography fontSize={12}>
                I want to create and manage quizzes for candidates.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          disabled={!selectedRole}
          onClick={handleUpdateRole}
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );

  return roleConfirmation;
};
