import { useAuth } from '../../features/auth/hooks/useAuth';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../components/ui/alert-dialog'

const Profile = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate("/login", { replace: true })
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Profile</h1>
      {user ? (
        <div className="mt-4 space-y-2">
          <p><span className="font-medium">Name:</span> {user.username}</p>
          <p><span className="font-medium">Email:</span> {user.email}</p>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="cursor-pointer hover:scale-105 transition-transform"
                variant="destructive"
              >
                Logout
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be redirected to the login page.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel variant="outline" className="cursor-pointer">Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleLogout}
                  className="bg-destructive hover:bg-destructive/90 cursor-pointer"
                >
                  Logout
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </div>
      ) : (
        <p className="text-neutral-600 mt-2">Loading user details...</p>
      )}
    </div>
  )
}

export default Profile